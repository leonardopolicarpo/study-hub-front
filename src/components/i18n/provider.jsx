import { Fragment } from 'react';
import PropTypes from 'prop-types';
import { IntlProvider } from 'react-intl';
import { flatten } from 'flat';

import { LOCALES } from './constants';
import messages from './messages';

const Provider = ({ children, locale = LOCALES.PT }) => (
	<IntlProvider textComponent={Fragment} locale={locale} messages={flatten(messages[locale])}>
		{children}
	</IntlProvider>
);

Provider.displayName = 'IntlProvider';

Provider.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node
	]).isRequired,
	locale: PropTypes.oneOf(Object.values(LOCALES))
};

export default Provider;