import React from 'react';
import { array } from 'prop-types';
import HomeListItem from './HomeListItem';
import { isFirstRender } from '../../shared/utils/frontend';

import './HomeList.css';

const HomeList = ({ libros }) => (
  <>
    {isFirstRender(libros) ? (
      <div>There is no Libros.</div>
    ) : (
      <div className="HomeList">
        {libros.map((libro) => (
          <HomeListItem libro={libro} key={libro.id} />
        ))}
      </div>
    )}
  </>
);

HomeList.propTypes = {
    libros: array,
};

export default HomeList;
