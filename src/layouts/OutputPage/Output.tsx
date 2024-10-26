import { useState } from "react"
import { OutputSection } from "./Components/OutputSection"
import { useLocation } from "react-router-dom";
import { qAndAMock } from "../../mock/output";
import { QASection } from "./Components/QASection";
export const Output = () => {
    const location = useLocation();
    console.log(location)
    const data = location.state.data;

    const qAndA = data?.['Q&A'] || null;  // 使用 data 的字段，设置默认值
    const transcript = data?.['Transcript'] || null;
    const notes = data?.['Notes'] || null;
    const summary = data?.['Summary'] || null;
    // const qAndA = "It appears that you provided a large block of text from the Project Gutenberg website. I'll try to summarize the content for you: **Project Gutenberg's Mission** The project aims to make electronic works in various formats available for free, including e-books, audio books, and other digital media. **Copyright Information** The text outlines the terms and conditions under which users can access and use Project Gutenberg's works. The key points are: * Users agree not to remove any copyright notices from the works. * Works must be kept in their original format (e.g., e-book, audio book). * Users cannot sell or profit from the works. **About Project Gutenberg** The project was founded by Professor Michael S. Hart and is now managed by the non-profit Project Gutenberg Literary Archive Foundation. The foundation's principal office is located in Alaska, USA. **Donations** The text explains that donations are essential to supporting the project's mission. Users can donate through various channels, including online payments, credit card donations, or mail-in checks. **Contact Information** There are several contact points for more information about Project Gutenberg and its related organizations: * The Project Gutenberg Literary Archive Foundation (pglaaf.org) * Dr. Gregory B. Newby, Chief Executive and Director (gbnewby@pglaf.org) Please let me know if you have any specific questions or if there's anything else I can help with!"
    // const transcript = "It appears you're looking for a specific text related to Project Gutenberg. I'll provide a neutral response. If you'd like to create a new document or discussion based on the provided text, I can assist with formatting and providing information about copyright laws, non-profit organizations, and digital archives. Would you like me to: 1. Format the text into a readable format? 2. Provide information on copyright laws and non-profit organizations? 3. Discuss digital archives and Project Gutenberg's mission? Please let me know how I can help!"
    // const notes = "It seems like you're looking for a specific piece of text. The passage provided appears to be a disclaimer or copyright notice from Project Gutenberg, a digital library that provides free access to public domain books. If you're interested in learning more about Project Gutenberg and its mission, I'd be happy to help. They aim to provide a vast collection of electronic works that can be freely shared with anyone, promoting literacy and education. Is there something specific you'd like to know or discuss regarding this passage? Or would you like me to explain the purpose of the disclaimer in more detail?"
    // const summary = "It seems you provided a boilerplate text from Project Gutenberg. I'll provide a concise summary of the main points: **Project Gutenberg's Mission**: To increase access to public domain and licensed works in machine-readable formats. **Key Points**: 1. **Copyright and License**: Works are usually copyright-free or have been released under a license that allows free distribution. 2. **Volunteer Effort**: The project relies on volunteers to digitize, proofread, and maintain the collection. 3. **Financial Support**: Donations help cover expenses, ensure long-term viability, and support the foundation's mission. 4. **Donation Information**: Contributions are tax-deductible in the United States and can be made through various channels (e.g., online payments). 5. **General Information**: Project Gutenberg is a non-profit organization (501(c)(3) in the US), with its principal office located in Alaska, but has employees and volunteers worldwide. If you have any specific questions or would like further clarification on any of these points, please feel free to ask!"
    return (
        <div className="min-vh-100 bg-dark">
            <div className="container flex-grow-1 pt-3">
                <div className="col-6 offset-3">
                    <QASection title='Q&A' qAndA={qAndAMock} />
                    {transcript && <OutputSection title='Transcript' text={transcript} />}
                    {notes && <OutputSection title='Notes' text={notes} />}
                    {summary && <OutputSection title='Summary' text={summary} />}
                    <div className="d-flex justify-content-center">
                        <button type="submit" className="btn btn-black m-3 text-light border-white fw-bold" style={{ borderWidth: '2px' }}>
                            Download as a .txt file
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}