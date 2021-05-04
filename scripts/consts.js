const REPO = '2020-2-SiGeD-Frontend';
const OWNER = 'fga-eps-mds';
const SONAR_ID = 'fga-eps-mds_2020-2-G4-Frontend';
const SONAR_URL = `https://sonarcloud.io/api/measures/component_tree?component=${SONAR_ID}&metricKeys=files,functions,complexity,coverage,ncloc,comment_lines_density,duplicated_lines_density,security_rating,tests,test_success_density,test_execution_time,reliability_rating&ps=500`;

module.exports = {
  SONAR_URL,
  REPO,
  OWNER,
};
