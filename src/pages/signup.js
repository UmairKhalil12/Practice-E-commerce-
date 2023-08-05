import SignupForm from "@/Componets/Auth/SignupForm"

export default function Signup() {
    const onSubmit = async (email, password) => {
        try{
            const response = await fetch("./api/auth/signup" , {
                method:"POST",
                body: JSON.stringify({email, password}),
                headers : {
                    "Content-Type" : "application/json"
                }
            });
            if(response.ok){
                alert("Signup Successful"); 
            } 


        } catch (err){
            console.error(err);
        }
        
    
    }; 
    return <SignupForm onFormSubmit={onSubmit} />;
}; 