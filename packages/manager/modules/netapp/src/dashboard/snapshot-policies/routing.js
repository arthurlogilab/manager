export default /* @ngInject */ ($stateProvider) => {
  $stateProvider.state('netapp.dashboard.snapshotPolicies', {
    url: '/snapshotPolicies',
    views: {
      '@netapp.dashboard': {
        component: 'ovhManagerNetAppSnapshotPolicies',
      },
    },

    resolve: {
      goToCreateSnapshotPolicies: /* @ngInject */ ($state) => () =>
        $state.go('netapp.dashboard.snapshotPolicies.create'),
      getSnapshotPolicies: /* @ngInject */ ($http, $q, serviceName) => () =>
        $http
          .get(`/storage/netapp/${serviceName}/snapshotPolicy`)
          .then(({ data: snapshotPolicyIds }) =>
            $q
              .all(
                snapshotPolicyIds.map(({ id }) =>
                  $http
                    .get(`/storage/netapp/${serviceName}/snapshotPolicy/${id}`)
                    .then(({ data: snapshotPolicy }) => snapshotPolicy),
                ),
              )
              .then((snapshotPolicies) =>
                snapshotPolicies.filter(({ status }) => status !== 'deleting'),
              ),
          ),
      snapshotPolicies: /* @ngInject */ (getSnapshotPolicies) =>
        getSnapshotPolicies(),

      breadcrumb: /* @ngInject */ ($translate) =>
        $translate.instant('netapp_snapshot_policies_breadcrumb'),
    },
  });
};
