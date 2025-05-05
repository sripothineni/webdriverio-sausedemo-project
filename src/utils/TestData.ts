/**
 * Test data utility
 */
export default class TestData {
  /**
   * Standard user credentials
   */
  static readonly STANDARD_USER = {
    username: 'standard_user',
    password: 'secret_sauce'
  };

  /**
   * Locked out user credentials
   */
  static readonly LOCKED_OUT_USER = {
    username: 'locked_out_user',
    password: 'secret_sauce'
  };

  /**
   * Problem user credentials
   */
  static readonly PROBLEM_USER = {
    username: 'problem_user',
    password: 'secret_sauce'
  };

  /**
   * Performance glitch user credentials
   */
  static readonly PERFORMANCE_GLITCH_USER = {
    username: 'performance_glitch_user',
    password: 'secret_sauce'
  };

  /**
   * Invalid user credentials
   */
  static readonly INVALID_USER = {
    username: 'invalid_user',
    password: 'invalid_password'
  };
}
