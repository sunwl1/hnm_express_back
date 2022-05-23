const Sequelize = require('sequelize');

module.exports = class Post extends Sequelize.Model {
    static init(sequelize)
    {
        return super.init({
            comment: {
                type :Sequelize.STRING(100),
                allowNull:true
            }
        },{
            sequelize,
            //시간을 기록할것인지
            timestamps: true,
            //모델의 이름
            modelName:'Post',
            //테이블 이름
            tableName:'posts',
            //인코딩 방식
            charset: 'utf8'
        })
    }

}