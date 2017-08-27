const Team = require('../db_services/team/team_controller');

module.exports = function(app){
    app.get('/api/project/team/testTeamData',function(req, res){
        res.send({
            code: 200,
            msg: "操作成功",
            data: {
                teams: [
                    {
                        teamName: "testTeam1",
                        isManager: true,
                        isStared: true,
                        teamID: 1
                    },
                    {
                        teamName: "testTeam2",
                        isManager: false,
                        isStared: true,
                        teamID: 2
                    },
                    {
                        teamName: "testTeam3",
                        isManager: false,
                        isStared: false,
                        teamID: 3
                    },
                    {
                        teamName: "testTeam4",
                        isManager: false,
                        isStared: false,
                        teamID: 4
                    },
                    {
                        teamName: "testTeam5",
                        isManager: false,
                        isStared: false,
                        teamID: 5
                    },
                ],
                markedTeams: [
                    {
                        teamName: "testTeam1",
                        isManager: false,
                        isStared: true,
                        teamID: 1
                    },
                    {
                        teamName: "testTeam2",
                        isManager: false,
                        isStared: true,
                        teamID: 2
                    },
                ],
                ownTeams: [
                    {
                        teamName: "testTeam1",
                        isManager: true,
                        isStared: true,
                        teamID: 1
                    },
                ],

                userData: req.query
            }
        });
    });

    app.post('/api/project/team/postTestData',function(req, res){
        res.send({
            code: 200,
            msg: "操作成功",
            data: {
                userData: req.body
            }
        });
    });

};
