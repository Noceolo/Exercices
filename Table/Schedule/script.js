// it's gonna be for object exercices


function book (title, author, pagenbr, read){
    if(!new.target){
        throw Error("You need to use the new operator to create a new object")
    }else{
        this.title = title;
        this.author = author;
        this.pagenbr = pagenbr;
        this.read = read;
        this.info = function(){
            return (this.title + " by " + this.author + ", " + this.pagenbr + " pages," + this.read + ".")
        }
    };
}