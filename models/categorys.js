var mongoose =require('mongoose')//加载模块
var Schema = mongoose.Schema;
const categorySchema = new Schema({
    /*{
        "id": 20,
        "is_in_serving": true,
        "description": "苦了累了，来点甜的",
        "title": "甜品饮品",
        "link": "eleme://restaurants?filter_key=%7B%22category_schema%22%3A%7B%22category_name%22%3A%22%5Cu751c%5Cu54c1%5Cu996e%5Cu54c1%22%2C%22complex_category_ids%22%3A%5B240%2C241%2C242%5D%2C%22is_show_all_category%22%3Atrue%7D%2C%22restaurant_category_id%22%3A%7B%22id%22%3A239%2C%22name%22%3A%22%5Cu751c%5Cu54c1%5Cu996e%5Cu54c1%22%2C%22sub_categories%22%3A%5B%5D%2C%22image_url%22%3A%22%22%7D%2C%22activities%22%3A%5B%5D%7D&target_name=%E7%94%9C%E5%93%81%E9%A5%AE%E5%93%81&animation_type=1&is_need_mark=0&banner_type=",
        "image_url": "/2/35/696aa5cf9820adada9b11a3d14bf5jpeg.jpeg",
        "icon_url": "",
        "title_color": "",
        "__v": 0
    },*/
    id: Number,
    is_in_serving: {type: Boolean, default: true},
    description: String,
    title: String,
    link: String,
    image_url: String,
    icon_url: {type: String, default: ''},
    title_color: {type: String, default: ''},
    __v:{type: Number, default: 0},
});


module.exports= mongoose.model('categorys', categorySchema);
