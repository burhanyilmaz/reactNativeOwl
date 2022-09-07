import {takeScreenshot, press} from 'react-native-owl';
jest.useRealTimers();
jest.setTimeout(30000);

describe('App.tsx', () => {
  it('takes a screenshot of the initial screen', async () => {
    const screen = await takeScreenshot('initial');

    expect(screen).toMatchBaseline();
  });

  it('show loading, then takes a screenshot', async () => {
    await press('showLoading');
    const screen = await takeScreenshot('show-loading');
    expect(screen).toMatchBaseline();
  });
});
