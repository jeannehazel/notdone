import { leftDiv } from "./info.js"
import { rightDiv } from "./img.js"

let container = document.getElementById("container")

const data = {
    title: "My Dog",
    para1: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, dignissimos et voluptatum eligendi dolorum nisi accusamus iure explicabo? Inventore odit omnis delectus dolores, unde pariatur tenetur ut eaque provident voluptas!",
    title2: "Berber",
    para2: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, dignissimos et voluptatum eligendi dolorum nisi accusamus iure explicabo? Inventore odit omnis delectus dolores, unde pariatur tenetur ut eaque provident voluptas!.10 ",
    button1: "About Us",
    button2: "About You",
    button3: "Contact Us",
    button4: "Contact You",
    image: "dog.jpg"

}

const{title, para1,title2, para2, button1, button2, button3, button4, image } = data

container.append(leftDiv(title, para1, title2,para2, button1, button2, button3, button4))
container.append(rightDiv(image))