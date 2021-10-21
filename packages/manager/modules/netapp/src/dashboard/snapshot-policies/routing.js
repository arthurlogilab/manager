export default /* @ngInject */ ($stateProvider) => {
  $stateProvider.state('netapp.dashboard.snapshotPolicies', {
    url: '/snapshotPolicies',
    views: {
      '@netapp.dashboard': {
        component: 'ovhManagerNetAppSnapshotPolicies',
      },
    },

    resolve: {
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
      goToCreateSnapshotPolicies: /* @ngInject */ (
        $state,
        trackClick,
      ) => () => {
        trackClick('snapshot-policy::add-policy');
        return $state.go('netapp.dashboard.snapshotPolicies.create');
      },
      snapshotPolicies: /* @ngInject */ (getSnapshotPolicies) =>
        getSnapshotPolicies(),

      breadcrumb: /* @ngInject */ ($translate) =>
        $translate.instant('netapp_snapshot_policies_breadcrumb'),
    },
    atInternet: {
      rename: 'netapp::dashboard::snapshot-policy',
    },
  });
};
