export default /* @ngInject */ ($stateProvider) => {
  $stateProvider.state(
    'pci.projects.project.storages.databases.dashboard.users.add',
    {
      url: '/add',
      component: 'ovhManagerPciProjectDatabaseUsersAdd',
      resolve: {
        breadcrumb: () => null, // Hide breadcrumb
        goBack: /* @ngInject */ (goToUsers) => goToUsers,
      },
    },
  );
};
