require('dotenv').config();
const mongoose = require('mongoose');

mongoose.connect(`mongodb+srv://${process.env.DB_User}:${process.env.DB_PASSVORD}@cluster1.lrkts0e.mongodb.net/?retryWrites=true&w=majority`)
.then(()=> console.log('conect to mongo'))
.catch(err => console.error('not conected'))

const courseSchema = new mongoose.Schema({
    name: String,
    author: String,
    tags: [String],
    date: { type:Date, default: Date.now }, 
    isPublished: Boolean
});

const Course = mongoose.model('Course', courseSchema);
async function createCourse(){
    const course = new Course({
        name: "Marsieciu kalba",
        author: "marsietis",
        tags: ['skaitymas', 'rasymas' ,'galvojimas'],
        isPublished: false
    })
    const result = await course.save();
    console.log(result);
}
// createCourse();
// async function getCourses(){
//     const courses = await Course.find();
//     console.log(courses);
// }
//  getCourses()


// getFilteredCourses();

// async function getFilteredCourses(){
//     const courses = await Course
//     .find({autor:"Jolita",isPublished: true}
//     .limit(2)
//     .sort({name: 1});
//     .select({name: 1, tag: 1}));
// .project({ item: 1, status: 1, _id: 0 });
    
//     console.log(courses);
 
    
// }
// getFilteredCourses();

// async function getFilteredCourses(){
//     const courses = await Course
//     .find()
//     .and([{autor:"marsietis"}, {isPublished:true}])
//     console.log(courses);
// }

// getFilteredCourses();

async function updateCourses(id){
    const course = await Course.findById(id);
    if(!course) return;
    
     if(course.isPublished) return;
    course.isPublished = true;
     course.author = "kazkoks kitas";
     const result = await course.save();
     console.log(result);

}

getCourses();
updateCourses('662bc09b1d83d8a2e7d8e4c95');
getCourses();