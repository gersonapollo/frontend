pipeline {
    agent any

    stages {
        stage ('Clone') {
            steps {
                git branch: 'release/rc', url: "https://github.com/gersonapollo/frontend.git"
            }
        }

        stage ('Artifactory configuration') {
            steps {
                rtServer (
                    id: "ARTIFACTORY_SERVER",
                    url: "http://localhost:8081",
                    credentialsId: 'ARTIFACTORY_CREDENTIALS'
                )
            }
        }

        stage ('Build docker image') {
            steps {
                script {
                    docker.build('frontend:latest')
                }
            }
        }

        stage ('Push image to Artifactory') {
            steps {
                rtDockerPush(
                    serverId: "ARTIFACTORY_SERVER",
                    image: 'frontend:latest',
                    // Host:
                    // On OSX: "tcp://127.0.0.1:1234"
                    // On Linux can be omitted or null
//                     host: 'tcp://127.0.0.1:8081',
                    targetRepo: 'docker-local/',
                    // Attach custom properties to the published artifacts:
                    properties: 'project-name=frontend;status=stable',
                    echo 'Testando Pipeline'
                )
            }
        }

        stage ('Publish build info') {
            steps {
                rtPublishBuildInfo (
                    serverId: "ARTIFACTORY_SERVER",
                    buildName: 'frontend',
                    echo 'ARTIFACTORY_SERVER'
                )
            }
        }
    }
}
