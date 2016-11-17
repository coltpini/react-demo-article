import Component from './Component';
import styles from './Component.css';
import test from 'tape';
import { shallow } from 'enzyme';


test('<Component> shallow testing', t => {

    t.ok(styles.container, 'it is importing classNames');

    t.end();
});
