const scanner = require('sonarqube-scanner');
 
scanner(
  {
    serverUrl: "http://localhost:9000",
    token: "974ef262f4f8dcc7233ef17376497ec4daec8bd4",
    
  },
  () => process.exit()
)