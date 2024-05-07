import study2 from"../assets/study2.png"
import study from"../assets/study.png"

const About = () => {
    return (
        <div className="md:px-14 p-4 max-w-s mx-auto space-y-10">
            <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                <div className="md:w-1/2">
                    <img src={study2} alt="" />
                </div>
                <div className="md:w-2/5">
                    <h2 className="md:text-5xl text-3xl font-bold text-primary"> 
                    We have improving our product <span className="text-secondary">for many years.</span></h2>
                    <p className="text-tartiary text-lg mb-7">Responding to feedback from users or customers about areas 
                        where the product can be enhanced or improved.
                    </p>
                        <button className="btnPrimary">Get Started</button>
                </div>
            </div>

            {/*2nd card*/}
            <div className="flex flex-col md:flex-row-reverse justify-between items-center gap-8">
                <div className="md:w-1/2">
                    <img src={study} alt="" />
                </div>
                <div className="md:w-1/2">
                    <h2 className="md:text-5xl text-3xl font-bold text-primary"> 
                    You can Practice at any  <span className="text-secondary">time convinent for you.</span></h2>
                    <p className="text-tartiary text-lg mb-7">Responding to feedback from users or customers about areas 
                        where the product can be enhanced or improved.
                    </p>
                        <button className="btnPrimary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default About;
