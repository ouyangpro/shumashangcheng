const base = {
    get() {
                return {
            url : "http://localhost:8080/shumashangcheng/",
            name: "shumashangcheng",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/shumashangcheng/front/index.html'
        };
            },
    getProjectName(){
        return {
            projectName: "数码商城系统"
        } 
    }
}
export default base
