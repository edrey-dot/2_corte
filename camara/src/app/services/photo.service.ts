import { Injectable } from '@angular/core';
import { Camera, CameraResultType, CameraSource, Photo } from '@capacitor/camera';
import { Filesystem, Directory } from '@capacitor/filesystem';
import { Preferences } from '@capacitor/preferences';

@Injectable({
  providedIn: 'root',
})
export class PhotoService {
  public photos: UserPhoto[] = [];

  private PHOTO_STORAGE = 'photos';

  // CAMBIO: calidad elegida por el usuario (por defecto 100)
  public quality = 100;

  public async addNewToGallery() {
    const capturedPhoto = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
      // CAMBIO: usamos la calidad elegida en vez del número fijo
      quality: this.quality,
    });

    const fileName = Date.now() + '.jpeg';
    const savedImageFile = await this.savePicture(capturedPhoto, fileName);

    this.photos = [savedImageFile, ...this.photos];

    this.cachePhotos();
  }

  private async savePicture(photo: Photo, fileName: string): Promise<UserPhoto> {
    const base64Data = await this.base64FromPath(photo.webPath!);

    await Filesystem.writeFile({
      path: fileName,
      data: base64Data,
      directory: Directory.Data,
    });

    return {
      filepath: fileName,
      webviewPath: photo.webPath,
    };
  }

  private async base64FromPath(path: string): Promise<string> {
    const response = await fetch(path);
    const blob = await response.blob();
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onerror = reject;
      reader.onload = () => {
        if (typeof reader.result === 'string') {
          resolve(reader.result);
        } else {
          reject('method did not return a string');
        }
      };
      reader.readAsDataURL(blob);
    });
  }

  private cachePhotos() {
    Preferences.set({
      key: this.PHOTO_STORAGE,
      value: JSON.stringify(this.photos),
    });
  }

  public async loadSaved() {
    const photoList = await Preferences.get({ key: this.PHOTO_STORAGE });
    const photosInPreferences: UserPhoto[] = photoList.value ? JSON.parse(photoList.value) : [];

    for (const photo of photosInPreferences) {
      const file = await Filesystem.readFile({
        path: photo.filepath,
        directory: Directory.Data,
      });
      photo.webviewPath = `data:image/jpeg;base64,${file.data}`;
    }

    this.photos = photosInPreferences;
  }
}

export interface UserPhoto {
  filepath: string;
  webviewPath?: string;
}