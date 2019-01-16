function judgeRouter(type) {
    //判断当前是什么路由
    var route = this.$router.history.current.path;
    switch (route) {
        case "/Index/recommend":
            this[type] = 0;
            break;
        case "/Index/phone":
            this[type] = 1;
            break;
        case "/Index/music":
            this[type] = 2;
            break;
        case "/Index/parts":
            this[type] = 3;
            break;
        case "/Index/live":
            this[type] = 4;
            break;
        default:
            this[type] = 0;
    }
}

export default judgeRouter