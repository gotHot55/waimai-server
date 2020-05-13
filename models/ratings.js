var mongoose =require('mongoose')//加载模块
var Schema = mongoose.Schema;
const ratingsSchema = new Schema({
    /*ratings:[
        {
            username:String,
            rateTime:Number,
            deliveryTime:Number,
            score:Number,
            rateType:Number,
            text:String,
            avatar:String,
            recommend:[{type:String}]
        }
    ]*/
});
module.exports= mongoose.model('ratings', ratingsSchema);
