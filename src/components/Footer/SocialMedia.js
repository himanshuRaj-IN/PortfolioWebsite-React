import React from 'react'
import './SocialMedia.css'
import data from '../../data.json'
export default function SocialMedia() {
    return (
        <div className="container">
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
                <a href={`mailto:${data.email}`}class="fa fa-envelope">&nbsp;</a>
                <a href={data.socialProfiles.linkedIn}className="fa fa-linkedin">&nbsp;</a>
                <a href={data.socialProfiles.gitHub} className="fa fa-github">&nbsp;</a>
                <a href={data.socialProfiles.instagram} className="fa fa-instagram">&nbsp;</a>
                <a href={data.socialProfiles.facebook} className="fa fa-facebook">&nbsp;</a>
                <a href={data.socialProfiles.twitter} className="fa fa-twitter">&nbsp;</a>
                
        </div>
    )
}
