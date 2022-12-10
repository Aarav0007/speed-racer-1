class Form {
  constructor() {
    this.input = createInput("")
    this.playButton = createButton("Play")
    this.titleImage = createImg ("assets/title.png")
    this.greeting = createElement ("h2")
  }
setElementPosition(){
  this.titleImage.position (10,10)
  this.input.position(width/2-100,height/2-80)
  this.playButton.position (width/2-60,height/2-20)
  this.greeting.position(width/2-100,height/2-100)
}
hide(){
  this.input.hide()
  this.playButton.hide()
}
handleMousePressed(){
this.playButton.mousePressed(()=>{
  this.input.hide()
  this.playButton.hide()
  var message = `Hello ${this.input.value()}Wait for Another Player to Join.`
  this.greeting.html(message)
})
}
display(){ 
this.setElementPosition()
this.handleMousePressed()
}
}