const mongoose=require("mongoose");
async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/innohub');
}
main().then(()=>{
    console.log("Connected to db");
}).catch(err=>{
    console.log(err);
})
const schema=mongoose.Schema;
const listingschema=schema({
    name:{
    type:String
    
    },
    description:{
    type:String,
    required:true
    },
    contact:{
    type:[schema.Types.Mixed]
    },
    location:{
        type:String
    }
});
const data=[{name: "TechWise Solutions",
    description: "TechWise Solutions provides innovative software solutions for businesses, specializing in AI-driven analytics and automation tools.",
    contact: "info@techwisesolutions.com, +1 (555) 123-4567",
    location: "San Francisco, California, USA"},
    {name: "EcoGrowth Technologies",
    description: "EcoGrowth Technologies develops sustainable agricultural solutions, leveraging IoT and sensor technology to optimize crop yields while minimizing environmental impact.",
    contact: "contact@ecogrowthtech.com, +1 (555) 987-6543",
    location: "San Francisco, California, USA"},
    {name: "HealthMinds AI",
    description: "HealthMinds AI offers AI-powered mental health support platforms, providing personalized therapy sessions and mental wellness assessments.",
    contact: " support@healthmindsai.com, +1 (555) 234-5678",
    location: "New York City, New York, USA"},
    {name: "CleanAir Solutions",
    description: "CleanAir Solutions develops advanced air purification systemsfor indoor spaces, utilizing cutting-edge filtration technology to remove pollutants and improve air quality.",
    contact: "hello@cleanairsolutions.co.uk, +44 20 1234 5678",
    location: "London, England, UK"},
 
 { name: "FoodTech Innovations",
    description: "FoodTech Innovations creates sustainable food packaging solutions using biodegradable materials, aiming to reduce plastic waste in the food industry.",
    contact: "info@foodtechinnovations.com, +1 (555) 876-5432",
    location:" Berlin, Germany",
 },
 {name: "EduProctor",
 description:" EduProctor offers an AI-driven online exam proctoring platform, ensuring academic integrity during remote examinations through facial recognition and behavior analysis.",
 contact: "contact@eduproctor.com, +1 (555) 345-6789",
 location: "Toronto, Ontario, Canada"},
 
 {name: "TravelEase Adventures",
 description: "TravelEase Adventures provides curated travel experiences for adventurous travelers, specializing in off-the-beaten-path destinations and eco-friendly accommodations.",
 contact: "info@traveleaseadventures.com, +1 (555) 456-7890",
 location: "Sydney, Australia"},
 
 {name: "SmartHome Solutions",
 description:" SmartHome Solutions develops IoT-based home automation systems, offering smart energy management, security, and convenience features for homeowners.",
 contact: "support@smarthomesolutions.net, +1 (555) 678-9012",
 location: "Austin, Texas, USA",
 },
 {name: "FinTech Innovate",
 description: "FinTech Innovate provides innovative financial technology solutions, including blockchain-based payment systems and AI-driven investment platforms.",
 contact: "hello@fintechinnovate.com, +1 (555) 789-0123",
 location: "Singapore"},
 
 {name: "CleanTech Solutions",
 description: "CleanTech Solutions develops renewable energy solutions, specializing in solar panel technology and energy storage systems for residential and commercial applications.",
 contact: "info@cleantechsolutions.org, +1 (555) 901-2345",
 location:" Stockholm, Sweden"}
]
const listings=mongoose.model("StartupList",listingschema);
async function insert(){
    await listings.insertMany(data);
};
//insert();
module.export={listings}