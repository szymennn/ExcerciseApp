using AutoMapper;
using ExcerciseApp.Core.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ExcerciseApp.Core.Dtos;

namespace ExcerciseApp.Api.MapperConfig
{
    public class MappingProfile : Profile
    {
        public MappingProfile()
        {
            CreateMap<Book, BookApiModel>();
            CreateMap<BookBindingModel, Book>();
            CreateMap<BookDetails, BookDetailsApiModel>();
            CreateMap<UserBindingModel, User>();
            CreateMap<User, UserApiModel>();
            CreateMap<BorrowBindingModel, Borrow>();
            CreateMap<Borrow, BorrowApiModel>();
            CreateMap<UserDetails, UserDetailsApiModel>();
        }
    }
}
