import FooterImg from "../../assets/logo-text.png";

const Footer = () => {
    return (
        <footer className="bg-[#F1F5F9]">



            <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 px-5 md:px-0  py-10">


                <div>
                    <img
                        src={FooterImg}
                        className="h-[50px]"
                        alt=""
                    />

                    <p className="text-[#64748B] mt-3">
                        Curated tools, technologies, and resources for developers
                        building modern software.
                    </p>

                    <ul className="flex gap-5 font-semibold text-[#475569] py-8">
                        <li>GitHub</li>
                        <li>Twitter</li>
                        <li>Linkedin</li>
                    </ul>
                </div>



                <div className="hidden md:block">
                    <h2 className="text-[#0F172A ] font-bold">PRODUCT</h2>

                    <ul className="text-[#64748B] font-semibold py-5 space-y-2">
                        <li>Home</li>
                        <li>Technologies</li>
                        <li>Projects</li>
                    </ul>
                </div>



                <div className="hidden md:block">
                    <h2 className="text-[#0F172A] font-bold">COMPANY</h2>

                    <ul className="text-[#64748B] font-semibold py-5 space-y-2">
                        <li>About</li>
                        <li>Contact</li>
                        <li>Careers</li>
                    </ul>
                </div>


                <div className="hidden md:block">
                    <h2 className="text-[#0F172A] font-bold">LEGAL</h2>

                    <ul className="text-[#64748B] py-5 space-y-2">
                        <li>Privacy Policy</li>
                        <li>Terms of Service</li>
                    </ul>
                </div>

            </div>



            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-3 border-t border-[#e2e8f0] p-5 md:px-0">

                <h2 className="text-[#64748B] text-center">
                    © 2026 Dev Stack. All rights reserved.
                </h2>

                <ul className="flex gap-6 font-semibold text-[#475569]">
                    <li>Privacy</li>
                    <li>Terms</li>
                </ul>

            </div>

        </footer>
    );
};

export default Footer;