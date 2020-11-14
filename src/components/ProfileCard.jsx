import React from 'react';
import styled from 'styled-components';
import CardBG from '../images/bg-pattern-card.svg';

const Card = styled.div`
  width: 100%;
  height: 37.4rem;
  max-width: 35rem;
  overflow: hidden;
  position: relative;
  text-align: center;
  border-radius: 1.5rem;
  background-color: var(--color-white);
  box-shadow: 0 5rem 10rem -2rem rgba(8,70,94,0.50);

  &::before {
    content: '';
    top: 0;
    left: 0;
    width: 100%;
    height: 14rem;
    position: absolute;
    background-image: url(${CardBG});
  }

  .basic-info {
    display: flex;
    margin-top: 1.9rem;
    align-items: center;
    margin-bottom: .8rem;
    justify-content: center;
    
    &__name {
      font-size: 1.8rem;
      line-height: 2.3rem;
      color: var(--color-dark-blue);
      font-weight: var(--weight-bold);
    }
    &__age {
      font-size: 1.8rem;
      line-height: 2.3rem;
      margin-left: .85rem;
      color: var(--color-gray-blue);
      font-weight: var(--weight-regular);
    }
  }

  .location {
    font-size: 1.4rem;
    line-height: 1.8rem;
    margin-bottom: 2.4rem;
    color: var(--color-gray-blue);
  }

  .divider {
    width: 100%;
    height: .1rem;
    background-color: #E8E9EC;
  }

  .social-info {
    display: flex;
    margin-top: 2.4rem;
    padding-left: 4.1rem;
    padding-right: 5.2rem;
    justify-content: space-between;

    h3 {
      font-size: 1.8rem;
      line-height: 2.3rem;
      margin-bottom: .4rem;
      color: var(--color-dark-blue);
      font-weight: var(--weight-bold);
    }

    p {
      font-size: 1rem;
      line-height: 1.3rem;
      letter-spacing: 1.5px;
      color: var(--color-gray-blue);
      font-weight: var(--weight-regular);
    }
  }
`;

const Avatar = styled.div`
  z-index: 1;
  border-radius: 50%;
  margin-top: 8.7rem;
  position: relative;
  align-items: center;
  display: inline-flex;

  img {
    width: 9.6rem;
    height: 9.6rem;
    border-radius: 50%;
    border: .5rem solid var(--color-white);
  }
`;

export default function ProfileCard({ userInfo }) {
  return (
    <Card>
      <Avatar>
        <img src={userInfo.avatar} alt="Victor avatar"/>
      </Avatar>
      <div className="basic-info">
        <h2 className="basic-info__name">{ userInfo.username }</h2>
        <p className="basic-info__age">{ userInfo.age }</p>
      </div>
      <p className="location">{ userInfo.location }</p>
      <div className="divider"></div>
      <div className="social-info">
        <div className="socials-info__followers">
          <h3>{ userInfo.followers }</h3>
          <p>followers</p>
        </div>
        <div className="socials-info__likes">
          <h3>{ userInfo.likes }</h3>
          <p>likes</p>
        </div>
        <div className="socials-info__photos">
          <h3>{ userInfo.photos }</h3>
          <p>photos</p>
        </div>
      </div>
    </Card>
  );
}