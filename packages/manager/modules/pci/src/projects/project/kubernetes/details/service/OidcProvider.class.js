export default class OidcProvider {
  /**
   * Create a OIDC Provider instance
   * @param oidcProviderModel {Object}: native oidcProvider JS object
   * */
  constructor(oidcProviderModel) {
    Object.assign(this, oidcProviderModel);
  }

  isDefined() {
    const { clientId, issuerUrl } = this;
    return clientId && clientId !== '' && issuerUrl && issuerUrl !== '';
  }

  copy() {
    return new OidcProvider(this);
  }
}
