
// let _ = require('lodash');
// let mongoose = require('mongoose');
// let mongoosePaginate = require('mongoose-paginate');

// let TeamSchema = require('./team_model').TeamSchema;
// TeamSchema.plugin(mongoosePaginate);
// let Team = mongoose.model('TeamSchema',TeamSchema);

// exports.createTeam = function(req, res){
//     let team = new Team(req.body);

//     team.save(function (err, team){
//         if(err){
//             return res.status(400).send({
//                 message: 'create team failed'
//             });
//         }else {
//             res.jsonp(team);
//         }
//     })
// };

// exports.queryTeam = function(req, res){
//     let query = req.query
//     Team.find(query).exec(function (err, team){
//         if(err){
//             return res.status(400).send({
//                 message: 'team query failed'
//             });
//         } else {
//             res.jsonp(team);
//         }
//     })
// }

// exports.updateTeam = function(req, res){
//     let id = req.body._id;
//     Team.find({_id: Object(id) }).exec( function (erro, project) {
//         if(erro){
//             return res.status(400).send({
//                 message: "team update failed"
//             });
//         }else{
//             let newTeam = Team[0];
//             newTeam = _.extend(newTeam, req.body);
//             newTeam.save(function(err){
//                 if(err){
//                     return res.status(400).send({
//                         message:"team update failed while saving"
//                     });
//                 } else {
//                     res.send({
//                         message: 'update success'
//                     });
//                 }
//             });
//         }
//     })
// };