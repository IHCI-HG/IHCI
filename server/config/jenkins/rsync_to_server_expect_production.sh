#/usr/bin/expect
set serverAddress [lindex $argv 0]
set sourceFile [lindex $argv 1]
set targetFile [lindex $argv 2]

set timeout 600
###start to copy war file to server's /tmp folder
spawn rsync -crvz --exclude=.git --exclude=configs/jenkins $sourceFile root@$serverAddress:$targetFile
expect {
"yes/no" { send "yes\r";exp_continue }
"password:" { send "onxyia\r"; expect "#" }
}