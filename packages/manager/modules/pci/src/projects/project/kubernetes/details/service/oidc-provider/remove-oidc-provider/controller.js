import get from 'lodash/get';

export default class {
  /* @ngInject */
  constructor($translate, Kubernetes) {
    this.$translate = $translate;
    this.Kubernetes = Kubernetes;
  }

  $onInit() {
    this.isRemoving = false;
  }

  onRemoveOidcProviderConfirm() {
    this.sendKubeTrack('details::service::remove-oidc-provider::confirm');

    this.isRemoving = true;
    return this.Kubernetes.removeOidcProvider(this.projectId, this.kubeId)
      .then(() =>
        this.goBack(
          this.$translate.instant(
            'pci_projects_project_kubernetes_details_service_remove_oidc_provider_request_success',
          ),
        ),
      )
      .catch((error) =>
        this.goBack(
          this.$translate.instant(
            'pci_projects_project_kubernetes_details_service_remove_oidc_provider_request_error',
            {
              message: get(error, 'data.message'),
            },
          ),
          'error',
        ),
      )
      .finally(() => {
        this.isRemoving = false;
      });
  }

  onRemoveOidcProviderCancel() {
    this.sendKubeTrack('details::service::remove-oidc-provider::cancel');

    this.goBack();
  }
}
