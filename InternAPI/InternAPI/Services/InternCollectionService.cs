using InternAPI.Models;
using InternAPI.Settings;
using MongoDB.Driver;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace InternAPI.Services
{
    public class InternCollectionService : IInternCollectionService
    {
        private readonly IMongoCollection<Intern> _interns;
        public InternCollectionService(IMongoDBSettings settings)
        {
            var client = new MongoClient(settings.ConnectionString);
            var database = client.GetDatabase(settings.DatabaseName);

            _interns = database.GetCollection<Intern>(settings.InternCollectionName);
        }

        public async Task<List<Intern>> GetAllAsync()
        {
            var result = await _interns.FindAsync(intern => true);
            return result.ToList();
        }
        public async Task<bool> CreateAsync(Intern intern)
        {
            if (intern.Id == Guid.Empty)
            {
                intern.Id = Guid.NewGuid();
            }
            await _interns.InsertOneAsync(intern);
            return true;
        }

        public async Task<bool> DeleteAsync(Guid id)
        {
            var result = await _interns.DeleteOneAsync(intern => intern.Id == id);
            if (result.IsAcknowledged && result.DeletedCount == 0)
            {
                return false;
            }
            return true;
        }

        public async Task<bool> UpdateAsync(Guid id, Intern intern)
        {
            intern.Id = id;
            var result = await _interns.ReplaceOneAsync(intern => intern.Id == id, intern);
            if (!result.IsAcknowledged && result.ModifiedCount == 0)
            {
                await _interns.InsertOneAsync(intern);
                return false;
            }
            return true;
        }
    }
}
