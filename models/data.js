var mongoose =require('mongoose')//加载模块
var Schema = mongoose.Schema;
const datasSchema = new Schema({
});
module.exports= mongoose.model('datas', datasSchema);
