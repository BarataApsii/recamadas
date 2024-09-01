//this middleware will check if the user has permission

const roles = {
  owner: ['create', 'read', 'update', 'delete', 'download', 'upload'],
  admin: ['admin', 'create', 'read', 'update', 'delete', 'download', 'upload'],
  secretary: ['create', 'read', 'update', 'download', 'upload'],
};
exports.roles = roles;

exports.hasPermission = (permissionName = 'none') => {
  return function (req, res, next) {
    const currentUserRole = req.admin.role;

    if (
      roles[currentUserRole]?.includes(permissionName) ||
      req.admin.role === 'owner' ||
      req.admin.role === 'admin'
    ) {
      next();
    } else {
      return res.status(403).json({
        success: false,
        result: null,
        message: 'Access denied : you are not granted permission.',
      });
    }
  };
};
