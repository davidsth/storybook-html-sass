import { storiesOf } from '@storybook/html';
import styles from '../stylesheets/main.scss';

storiesOf('Button', module)
  .add('with text', () => '<button class="btn">Hello World</button>')
  .add('with emoji', () => {
    const button = document.createElement('button');
    button.innerText = '😀 😎 👍 💯';
    return button;
  });

