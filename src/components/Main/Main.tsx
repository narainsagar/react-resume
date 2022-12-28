import React from 'react';
import './Main.scss';
import Profile from './../../profile-data.json';

console.log('Profile:', Profile);

const MainComponent: React.FC = () => {
    const renderHTML = (htmlStr: string) => {
        return {
            __html: htmlStr
        };
    };

    const renderLink = (v: string) => {
        return v.replace('https://', '').replace('http://', '');
    };

    const getValue = (v: string | boolean) => {
        if (typeof v == 'boolean') {
            return v ? 'Yes' : 'No';
        }
        return v;
    }

    return (
        <div className='main'>
            <section className="section-container header">
                <div className="content">
                    <h1 className='title'>{Profile.title}</h1>
                    <p dangerouslySetInnerHTML={renderHTML(Profile.description)}></p>
                </div>
            </section>
            <section className='section-container contact'>
                <div className='row col-sm-12'>
                    <div className='col-sm-2'>
                        <h5>{Profile.contact.title}</h5>
                    </div>
                    <div className='col-sm-10'>
                        <div className='row'>
                            {Profile.contact.value.map(info => (
                                <div className='col-sm-6' style={{ display: info.display === false ? 'none' : '' }}>
                                    <p className='item'>{info.title}</p>
                                    <p className='value'>{info.value}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
            <section className='section-container social-links'>
                <div className='row col-sm-12'>
                    <div className='col-sm-2'>
                        <h5>{Profile.links.social.title}</h5>
                    </div>
                    <div className='col-sm-10'>
                        <div className='row'>
                            <div className='col-sm-6'>
                                <p className='item'>{Profile.links.social.linkedin.title}</p>
                                <p className='value'>
                                    <a href={Profile.links.social.linkedin.value} target="_blank">{Profile.links.social.linkedin.value}</a>
                                </p>
                            </div>
                            <div className='col-sm-6'>
                                <p className='item'>{Profile.links.social.github.title}</p>
                                <p className='value'>
                                    <a href={Profile.links.social.github.value} target="_blank">{Profile.links.social.github.value}</a>
                                </p>
                            </div>
                            <div className='col-sm-6'>
                                <p className='item'>{Profile.links.social.stackoverflow.title}</p>
                                <p className='value'>
                                    <a href={Profile.links.social.stackoverflow.value} target="_blank">{Profile.links.social.stackoverflow.value}</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='section-container profile'>
                <div className='row col-sm-12'>
                    <div className='col-sm-2'>
                        <h5>{Profile.links.additional.title}</h5>
                    </div>
                    <div className='col-sm-10'>
                        <div className='row'>
                            {/* <div className='col-sm-6'>
                                <p className='item'>{Profile.links.additional.resume.title}</p>
                                <p className='value'>
                                    <a href={Profile.links.additional.resume.value} target="_blank">{Profile.links.additional.resume.value}</a>
                                </p>
                            </div> */}
                            <div className='col-sm-6'>
                                <p className='item'>{Profile.links.additional.upwork.title}</p>
                                <p className='value'>
                                    <a href={Profile.links.additional.upwork.value} target="_blank">{Profile.links.additional.upwork.value}</a>
                                </p>
                            </div>
                            <div className='col-sm-6'>
                                <p className='item'>{Profile.links.additional.portfolios.title}</p>
                                <p className='value'>
                                    <a href={Profile.links.additional.portfolios.value} target="_blank">{Profile.links.additional.portfolios.value}</a>
                                </p>
                            </div>
                            <div className='col-sm-6'>
                                <p className='item'>{Profile.links.additional.sampleCodesDemos.title}</p>
                                <p className='value'>
                                    <a href={Profile.links.additional.sampleCodesDemos.value} target="_blank">{Profile.links.additional.sampleCodesDemos.value}</a>
                                </p>
                            </div>
                            <div className='col-sm-6'>
                                <p className='item'>{Profile.links.additional.blog.title}</p>
                                <p className='value'>
                                    <a href={Profile.links.additional.blog.value} target="_blank">{Profile.links.additional.blog.value}</a>
                                </p>
                            </div>
                            <div className='col-sm-6'>
                                <p className='item'>{Profile.links.additional.website.title}</p>
                                <p className='value'>
                                    <a href={Profile.links.additional.website.value} target="_blank">{Profile.links.additional.website.value}</a>
                                </p>
                            </div>
                            <div className='col-sm-6'>
                                <p className='item'>{Profile.links.additional.calendly.title}</p>
                                <p className='value'>
                                    <a href={Profile.links.additional.calendly.value} target="_blank">{Profile.links.additional.calendly.value}</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='section-container skills'>
                <div className='row col-sm-12'>
                    <div className='col-sm-2'>
                        <h5>{Profile.skills.title}</h5>
                    </div>
                    <div className='col-sm-10'>
                        <div className='row'>
                            <div className='col-sm-12'>
                                <p>
                                    {Profile.skills.value.join(', ')}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='section-container mobility'>
                <div className='row col-sm-12'>
                    <div className='col-sm-2'>
                        <h5>{Profile.mobility.title}</h5>
                    </div>
                    <div className='col-sm-10'>
                        <div className='row'>
                            {Profile.mobility.value.map((v) => (
                                <div className='col-sm-4'>
                                    <p className='item'>{v.title}</p>
                                    <p className='value'>
                                        {getValue(v.value)}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
            <section className='section-container educations'>
                <div className='row col-sm-12'>
                    <div className='col-sm-2'>
                        <h5>{Profile.education.title}</h5>
                    </div>
                    <div className='col-sm-10'>
                        {Profile.education.value.map((edu) => (
                            <div className='row separation'>
                                {edu.value.map(v => (
                                    <div className='col-sm-6' style={{ display: !v.display ? 'none' : '' }}>
                                        <p className='item'>{v.title}</p>
                                        <p className='value'>
                                            {getValue(v.value)}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <section className='section-container awards'>
                <div className='row col-sm-12'>
                    <div className='col-sm-2'>
                        <h5>{Profile.awards.title}</h5>
                    </div>
                    <div className='col-sm-10'>
                        <div className='row'>
                            <div className='col-sm-12'>
                                <p dangerouslySetInnerHTML={renderHTML(Profile.awards.value)}></p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='section-container employments'>
                <div className='row col-sm-12'>
                    <div className='col-sm-2'>
                        <h5>{Profile.employment.title}</h5>
                    </div>
                    <div className='col-sm-10'>
                        {Profile.employment.value.map((work) => (
                            <div className='row separation'>
                                {work.value.map(v => (
                                    <div className='col-sm-6' style={{ display: !v.display ? 'none' : '' }}>
                                        <p className='item'>{v.title}</p>
                                        <p className='value'>
                                            {getValue(v.value)}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <section className='section-container languages'>
                <div className='row col-sm-12'>
                    <div className='col-sm-2'>
                        <h5>{Profile.languages.title}</h5>
                    </div>
                    <div className='col-sm-10'>
                        {Profile.languages.value.map((language) => (
                            <div className='row separation'>
                                {language.value.map(v => (
                                    <div className='col-sm-4' style={{ display: v.display === false ? 'none' : '' }}>
                                        <p className='item'>{v.title}</p>
                                        <p className='value'>
                                            {getValue(v.value)}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <section className="section-container footer">
                <div className="content">
                    <span>{renderLink(Profile.links.additional.website.value)}</span>
                </div>
            </section>
        </div>
    );
};

export default MainComponent;