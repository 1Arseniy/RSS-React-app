import { it, describe, vi } from 'vitest';

describe('tests Modal', () => {
  vi.mock('react-router-dom', async () => {
    const actual = await vi.importActual('react-router-dom');
    return {
      ...actual,
      useNavigate: vi.fn(),
      useParams: () => ({ id: '1' }),
    };
  });
  it('should show loader for user when get data', () => {
    // render(
    //   <Provider store={store}>
    //     <Modal />
    //   </Provider>
    // );
    // const loader = screen.getByTestId('loader');
    // expect(loader).toBeVisible();
    // expect(screen.getByRole('button', { name: 'Close' })).toBeVisible();
  });
});
