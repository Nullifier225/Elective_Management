const scanner = require('sonarqube-scanner');
 
scanner(
  {
    serverUrl: "http://localhost:9000",
    token: "41c35d72e54f60e4b2a8964aa6b4fbdf23cf673a",
    options: {
      'sonar.projectName': 'My App',
      'sonar.projectDescription': 'Description for "My App" project...',
      'sonar.sources': 'dist',
      'sonar.tests': 'specs'
    }
  },
  () => process.exit()
)