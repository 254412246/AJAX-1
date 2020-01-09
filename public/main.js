let n = 1
getpage.onclick = () => {
    const requset = new XMLHttpRequest();
    requset.open('GET', `/page${n + 1}`)
    requset.onreadystatechange = () => {
        if (requset.readyState === 4 && requset.status === 200) {
            const array = JSON.parse(requset.response)
            array.forEach(element => {
                const li = document.createElement('li')
                li.textContent = element.id
                xxx.appendChild(li)
            });
            n += 1;
        }

    }
    requset.send();
}

getJSON.onclick = () => {
    const requset = new XMLHttpRequest();
    requset.open('GET', '/5.json')
    requset.onreadystatechange = () => {
        if (requset.readyState === 4 && requset.status === 200) {
            const object = JSON.parse(requset.response)

            myname.textContent = object.name
        }
    };
    requset.send();
};
getXML.onclick = () => {
    const requset = new XMLHttpRequest();
    requset.open('GET', '/4.xml')
    requset.onreadystatechange = () => {
        if (requset.readyState === 4 && requset.status === 200) {
            const dom = requset.responseXML;
            const text = dom.getElementsByTagName('warning')[0].textContent
            console.log(text.trim())
        }
    }
    requset.send()
}
getHTML.onclick = () => {
    const requset = new XMLHttpRequest();
    requset.open('GET', '/3.html')
    requset.onreadystatechange = () => {
        if (requset.readyState === 4 && requset.status === 200) {
            const div = document.createElement('div')
            div.innerHTML = requset.response
            document.body.appendChild(div)
        }
    }
    requset.send()
}

getJS.onclick = () => {
    const requset = new XMLHttpRequest();
    requset.open("GET", "./2.js");
    requset.onreadystatechange = () => {
        if (requset.readyState === 4 && requset.status === 200) {
            const script = document.createElement('script')
            script.innerHTML = requset.response
            document.body.appendChild(script)
        }
    };
    requset.send();
};



getCSS.onclick = () => {
    const requset = new XMLHttpRequest();
    requset.open('GET', './style.css');
    requset.onreadystatechange = () => {
        //http状态吗小于300都是成功的
        if (requset.readyState === 4) {
            if (requset.status === 200) {
                //创建style标签
                const style = document.createElement("style")
                //填写style内容
                style.innerHTML = requset.response
                //插到head里面
                document.head.appendChild(style)
            } else {
                console.log('失败')
            }
        }

    }
    requset.send()
}
