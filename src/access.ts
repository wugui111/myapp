/**
 * @see https://umijs.org/docs/max/access#access
 * */
export default function access(initialState: { currentUser?: API.CurrentUser } | undefined) {
  const { currentUser } = initialState ?? {};
  return {
    canAdmin: currentUser && currentUser.role === 'admin',
    canUser: currentUser && currentUser.role === 'user',
    canEnterprise: currentUser && currentUser.role === 'enterprise',
    canEnterpriseOrAdmin: currentUser && (currentUser.role === 'enterprise' || currentUser.role === 'admin'),
  };
}