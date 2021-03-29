const scanner = require('sonarqube-scanner');
 
scanner(
  {
    serverUrl: "http://localhost:9000",
    token: "974ef262f4f8dcc7233ef17376497ec4daec8bd4",
    options: {
      'sonar.projectName': 'My App',
      'sonar.projectDescription': 'Description for "My App" project...',
      'sonar.sources': 'dist',
      'sonar.tests': 'specs',
      'sonar.typescript.lcov.reportPaths':'coverage/lcov.info'
    }
  },
  () => process.exit()
)