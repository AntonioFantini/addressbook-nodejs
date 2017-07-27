pipeline {
  agent any
  stages {
    stage('Build and Tests') {
      steps {
        sleep 5
        echo 'Build finished'
        echo 'Tests running...'
        echo 'Tests finished'
      }
    }
    stage('Deploy') {
      steps {
        echo 'Deploying..'
      }
    }
  }
}