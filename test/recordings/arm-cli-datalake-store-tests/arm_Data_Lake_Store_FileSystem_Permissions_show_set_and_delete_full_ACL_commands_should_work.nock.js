// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '53d9063d-87ae-4ea8-be90-3686c3b8669f',
    name: 'Visual Studio Ultimate with MSDN',
    user: {
      name: 'user@domain.example',
      type: 'user'
    },
    tenantId: '6e606ece-3a5a-4674-a654-d6b02bc5a51b',
    state: 'Enabled',
    registeredProviders: [],
    _eventsCount: '1',
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_ARM_TEST_LOCATION'] = 'East US 2';
  process.env['AZURE_ARM_TEST_RESOURCE_GROUP'] = 'xplattestadlarg05';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://xplattestadls3769.azuredatalakestore.net:443')
  .get('/webhdfs/v1/%2F?op=GETACLSTATUS&api-version=2015-10-01-preview')
  .reply(200, "{\"AclStatus\":{\"entries\":[\"user::rwx\",\"group::rwx\",\"other::---\",\"mask::rwx\",\"default:user::rwx\",\"default:group::rwx\",\"default:other::---\",\"default:mask::rwx\"],\"owner\":\"2e6c02d2-a364-4530-9137-d17403996cbf\",\"group\":\"2e6c02d2-a364-4530-9137-d17403996cbf\",\"stickyBit\":false}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '8eaad68d-a2a3-40f9-a876-f1340afb9e2f',
  'set-cookie': [ 'UserPrincipalSession=376e9635-01f9-44e7-a8a3-6f75a7fb7139; path=/; secure; HttpOnly' ],
  'server-perf': '[8eaad68da2a340f9a876f1340afb9e2f][ AuthTime::1502.06405499128::PostAuthTime::30821.8240668983 ][HdfsGetAclStatus :: 00:00:081 ms]%0a[SS Response Process :: 00:00:000 ms]%0a[GETACLSTATUS :: 00:00:081 ms]%0a',
  status: '0x0',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Wed, 16 Mar 2016 22:18:39 GMT',
  connection: 'close',
  'content-length': '271' });
 return result; },
function (nock) { 
var result = 
nock('https://xplattestadls3769.azuredatalakestore.net:443')
  .get('/webhdfs/v1/%2F?op=GETACLSTATUS&api-version=2015-10-01-preview')
  .reply(200, "{\"AclStatus\":{\"entries\":[\"user::rwx\",\"group::rwx\",\"other::---\",\"mask::rwx\",\"default:user::rwx\",\"default:group::rwx\",\"default:other::---\",\"default:mask::rwx\"],\"owner\":\"2e6c02d2-a364-4530-9137-d17403996cbf\",\"group\":\"2e6c02d2-a364-4530-9137-d17403996cbf\",\"stickyBit\":false}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '8eaad68d-a2a3-40f9-a876-f1340afb9e2f',
  'set-cookie': [ 'UserPrincipalSession=376e9635-01f9-44e7-a8a3-6f75a7fb7139; path=/; secure; HttpOnly' ],
  'server-perf': '[8eaad68da2a340f9a876f1340afb9e2f][ AuthTime::1502.06405499128::PostAuthTime::30821.8240668983 ][HdfsGetAclStatus :: 00:00:081 ms]%0a[SS Response Process :: 00:00:000 ms]%0a[GETACLSTATUS :: 00:00:081 ms]%0a',
  status: '0x0',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Wed, 16 Mar 2016 22:18:39 GMT',
  connection: 'close',
  'content-length': '271' });
 return result; },
function (nock) { 
var result = 
nock('http://xplattestadls3769.azuredatalakestore.net:443')
  .put('/webhdfs/v1/%2F?aclspec=user%3A%3Arwx%2Cgroup%3A%3Arwx%2Cother%3A%3A---%2Cmask%3A%3Arwx%2Cdefault%3Auser%3A%3Arwx%2Cdefault%3Agroup%3A%3Arwx%2Cdefault%3Aother%3A%3A---%2Cdefault%3Amask%3A%3Arwx%2Cdefault%3Auser%3A027c28d5-c91d-49f0-98c5-d10134b169b3%3Arwx&op=SETACL&api-version=2015-10-01-preview')
  .reply(200, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  expires: '-1',
  'x-ms-request-id': 'f8403a39-6940-47f7-a21e-88d1ca713351',
  contentlength: '0',
  'server-perf': '[f8403a39694047f7a21e88d1ca713351][ AuthTime::612.886876821713::PostAuthTime::176.638018232636 ][SETACL :: 00:00:967 ms]%0a',
  status: '0x0',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Wed, 16 Mar 2016 22:18:40 GMT',
  connection: 'close',
  'content-length': '0' });
 return result; },
function (nock) { 
var result = 
nock('https://xplattestadls3769.azuredatalakestore.net:443')
  .put('/webhdfs/v1/%2F?aclspec=user%3A%3Arwx%2Cgroup%3A%3Arwx%2Cother%3A%3A---%2Cmask%3A%3Arwx%2Cdefault%3Auser%3A%3Arwx%2Cdefault%3Agroup%3A%3Arwx%2Cdefault%3Aother%3A%3A---%2Cdefault%3Amask%3A%3Arwx%2Cdefault%3Auser%3A027c28d5-c91d-49f0-98c5-d10134b169b3%3Arwx&op=SETACL&api-version=2015-10-01-preview')
  .reply(200, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  expires: '-1',
  'x-ms-request-id': 'f8403a39-6940-47f7-a21e-88d1ca713351',
  contentlength: '0',
  'server-perf': '[f8403a39694047f7a21e88d1ca713351][ AuthTime::612.886876821713::PostAuthTime::176.638018232636 ][SETACL :: 00:00:967 ms]%0a',
  status: '0x0',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Wed, 16 Mar 2016 22:18:40 GMT',
  connection: 'close',
  'content-length': '0' });
 return result; },
function (nock) { 
var result = 
nock('http://xplattestadls3769.azuredatalakestore.net:443')
  .get('/webhdfs/v1/%2F?op=GETACLSTATUS&api-version=2015-10-01-preview')
  .reply(200, "{\"AclStatus\":{\"entries\":[\"user::rwx\",\"group::rwx\",\"other::---\",\"mask::rwx\",\"default:user::rwx\",\"default:group::rwx\",\"default:other::---\",\"default:mask::rwx\",\"default:user:027c28d5-c91d-49f0-98c5-d10134b169b3:rwx\"],\"owner\":\"2e6c02d2-a364-4530-9137-d17403996cbf\",\"group\":\"2e6c02d2-a364-4530-9137-d17403996cbf\",\"stickyBit\":false}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '579d1465-f114-4a09-992b-324d0557d6eb',
  'server-perf': '[579d1465f1144a09992b324d0557d6eb][ AuthTime::655.656372761819::PostAuthTime::150.976320668573 ][HdfsGetAclStatus :: 00:00:039 ms]%0a[SS Response Process :: 00:00:000 ms]%0a[GETACLSTATUS :: 00:00:040 ms]%0a',
  status: '0x0',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Wed, 16 Mar 2016 22:18:41 GMT',
  connection: 'close',
  'content-length': '327' });
 return result; },
function (nock) { 
var result = 
nock('https://xplattestadls3769.azuredatalakestore.net:443')
  .get('/webhdfs/v1/%2F?op=GETACLSTATUS&api-version=2015-10-01-preview')
  .reply(200, "{\"AclStatus\":{\"entries\":[\"user::rwx\",\"group::rwx\",\"other::---\",\"mask::rwx\",\"default:user::rwx\",\"default:group::rwx\",\"default:other::---\",\"default:mask::rwx\",\"default:user:027c28d5-c91d-49f0-98c5-d10134b169b3:rwx\"],\"owner\":\"2e6c02d2-a364-4530-9137-d17403996cbf\",\"group\":\"2e6c02d2-a364-4530-9137-d17403996cbf\",\"stickyBit\":false}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '579d1465-f114-4a09-992b-324d0557d6eb',
  'server-perf': '[579d1465f1144a09992b324d0557d6eb][ AuthTime::655.656372761819::PostAuthTime::150.976320668573 ][HdfsGetAclStatus :: 00:00:039 ms]%0a[SS Response Process :: 00:00:000 ms]%0a[GETACLSTATUS :: 00:00:040 ms]%0a',
  status: '0x0',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Wed, 16 Mar 2016 22:18:41 GMT',
  connection: 'close',
  'content-length': '327' });
 return result; }]];