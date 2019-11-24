pipeline {
  agent {
    dockerfile true
  }

  tools {nodejs "node"}

  stages {

    stage('Install dependencies') {
      steps {
        sh 'npm install'
      }
    }

    stage('Test') {
      steps {
         sh 'npm test'
      }
    }
  }
}
