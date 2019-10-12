using AutoMapper;
using ExcerciseApp.Core.Entities;
using ExcerciseApp.Core.Interfaces;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ExcerciseApp.Core.Dtos;

namespace ExcerciseApp.Api.Controllers
{

    [Route("users")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        private readonly IUserService _userService;
        private readonly IMapper _mapper;

        public UsersController(IUserService userService, IMapper mapper)
        {
            _userService = userService;
            _mapper = mapper;
        }

        [HttpGet]
        public IActionResult GetAllUsers()
        {
            var users = _userService.GetAll();
            var usersModel = _mapper.Map<IEnumerable<UserDetailsApiModel>>(users);
            return Ok(usersModel);
        }

        [HttpPost]
        public IActionResult AddUser(UserBindingModel userModel)
        {
            var user = _mapper.Map<User>(userModel);
            var users = _userService.AddUser(user);
            var usersModel = _mapper.Map<IEnumerable<UserDetailsApiModel>>(users);
            return Ok(usersModel);
        }

        [HttpPut("{userId}")]
        public IActionResult EditUser(UserBindingModel userModel, [FromRoute] int userId)
        {
            var user = _mapper.Map<User>(userModel);
            var updatedUser = _userService.EditUser(user, userId);
            var updatedUserModel = _mapper.Map<UserDetailsApiModel>(updatedUser);
            return Ok(updatedUserModel);
        }

        [HttpDelete("{userId}")]
        public IActionResult DeleteUser([FromRoute] int userId)
        {
            var users = _userService.DeleteUser(userId);
            var usersModel = _mapper.Map<IEnumerable<UserDetailsApiModel>>(users);
            return Ok(usersModel);
        }

        [HttpGet("{userId}")]
        public IActionResult GetUserDetails([FromRoute] int userId)
        {
            var userDetails = _userService.GetUserDetails(userId);
            var userDetailsModel = _mapper.Map<UserDetailsApiModel>(userDetails);
            return Ok(userDetailsModel);
        }
    }
}
