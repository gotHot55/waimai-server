var mongoose =require('mongoose')//加载模块
var Schema = mongoose.Schema;
const goodsSchema = new Schema({
    /*goods:[
        {
            name: String,
            icon:{type:String,default:''},
            foods: [
                {
                    name: String,
                    price: Number,
                    oldPrice: {type: Number, default: ''},
                    description: String,
                    sellCount: Number,
                    rating: Number,
                    info: Number,
                    ratings:[
                        {
                            username:String,
                            rateTime:Number,
                            rateType:{type: Number, default: 0},
                            text:String,
                            avatar:String(),
                        }
                    ],
                    icon:String,
                    image:String,
                    images:[
                        {type:String}
                    ],
                }
            ],
        }
    ],*/
});
module.exports= mongoose.model('goods', goodsSchema);
