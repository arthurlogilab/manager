import { REDHAT_COMMAND, UBUNTU_COMMAND, FOLDER_CREATION } from './constants';
import { getFileSystemMountPath, saveMountPath } from './utils';

export default class {
  /* @ngInject */
  constructor($translate) {
    this.$translate = $translate;
    this.REDHAT = REDHAT_COMMAND;
    this.UBUNTU = UBUNTU_COMMAND;
    this.FOLDER_CREATION = FOLDER_CREATION;
  }

  $onInit() {
    this.mountPath = getFileSystemMountPath(this.accessPath?.path);
    this.saveMountPath = saveMountPath(this.accessPath?.path);

    this.isEditing = {
      name: false,
      description: false,
    };
  }

  onEditNameClick() {
    this.isEditing.name = !this.isEditing.name;
  }

  onEditDescriptionClick() {
    this.isEditing.description = !this.isEditing.description;
  }

  update() {
    this.isEditing.name = false;
    this.isEditing.description = false;
    return this.updateVolume(this.volume)
      .then(() =>
        this.goToVolumeDashboard(
          this.$translate.instant('netapp_volumes_dashboard_update_success'),
        ),
      )
      .catch((error) =>
        this.goToVolumeDashboard(
          `${this.$translate.instant(
            'netapp_volumes_dashboard_update_error',
          )} ${error.data?.message}`,
          'error',
        ),
      );
  }
}
