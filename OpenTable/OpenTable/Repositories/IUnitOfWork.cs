﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace OpenTable.Repositories
{
    public interface IUnitOfWork
    {
        ITableRepository TableRepository { get; }
        IRestaurantRepository RestaurantRepository { get; set; }
        IReservationRepository ReservationRepository { get; set; }
        
        void Complete();
    }
}
