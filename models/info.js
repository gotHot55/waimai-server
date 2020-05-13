var mongoose =require('mongoose')//加载模块
var Schema = mongoose.Schema;
const infoSchema = new Schema({
/*
        name: String,
        description: String,
        deliveryTime: Number,
        score:Number,
        serviceScore: Number,
        foodScore: Number,
        rankRate: Number,
        minPrice: Number,
        deliveryPrice: Number,
        ratingCount: Number,
        sellCount: Number,
        distance: { type: String, default: "" },
        bulletin:String,
        supports: [
            {
                type: Number,
                name: String,
                content: String,
            }
        ],
        avatar: String,
        bgImg: String,
        pics: [
            {type:[String],index: '4d'}
        ],
        category: String,
        phone: Number,
        address: String,
        workTime: {type:Array,default:'09:35-24:00'}*/

});
module.exports= mongoose.model('infos', infoSchema);
