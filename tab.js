; const obj = {
    domParent: 'tab',
    tabTitleNode: 'span',
    tabContentNode: 'div',
    tabTitleClass: 'tab-title',
    tabContentClass: 'tab-content',
    tabTitle: ['javascript', 'html', 'css'],
    tabContent: ['房屋的开关', '房屋的结构', '房屋的装饰']
};
class Tab {
    constructor(obj = {}) {
        this.obj = obj;
        this.tabTitleNode = this.obj.tabTitleNode;
        this.tabContentNode = this.obj.tabContentNode;
        this.tabTitleClass = this.obj.tabTitleClass;
        this.tabContentClass = this.obj.tabContentClass;
        this.domParent = document.getElementById(this.obj.domParent) || document.body;
        this.tabTitle = this.obj.tabTitle;
        this.tabContent = this.obj.tabContent;
        this.init();
    };
    init() {
        this.getTabTitle();
        this.getTabContent();
    };
    getNodes(domObj, domParent, nodeType, className) {
        let divDom = document.createElement('div');
        divDom.className = className;
        let str = '';
        let that = this;
        domObj.map((v) => {
            str += `<${nodeType}>${v}</${nodeType}>`;
        })
        divDom.innerHTML = str;
        domParent.appendChild(divDom);
    };
    getTabTitle() {
        this.getNodes(this.tabTitle, this.domParent, this.tabTitleNode, this.tabTitleClass);
    };
    getTabContent() {
        this.getNodes(this.tabContent, this.domParent, this.tabContentNode, this.tabContentClass);
        this.getClick(this.tabTitleClass, this.tabContentClass);
    };
    getClick(titleName, contentName) {
        let clickNode = document.getElementsByClassName(titleName)[0].childNodes;
        let beClickNode = document.getElementsByClassName(contentName)[0].childNodes;
        console.log(beClickNode);
        [...clickNode].map((v, index) => {
            v.addEventListener('click', function () {
                [...beClickNode].map((u,enindex) => {
                    u.style.display = 'none';
                    if (enindex === index) {
                        u.style.display = 'block';
                    }
                });
            }, false);
        });
    };

};
const tab = new Tab(obj);